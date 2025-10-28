# # rest_client.py
# # Tiny, dependency-light RestClient wrapper for DataForSEO API.
# # Accepts `timeout` on post/get and forwards it to requests.

# import requests
# import logging

# logger = logging.getLogger(__name__)


# class RestClient:
#     """
#     Minimal RestClient compatible with the DataForSEO examples.
#     Usage:
#         client = RestClient("login", "password", base_url="https://api.dataforseo.com")
#         response = client.post("/v3/merchant/amazon/products/task_post", post_data, timeout=30)
#     The methods return the parsed JSON (resp.json()). Any network/request exceptions
#     (including requests.Timeout) are raised to the caller so they can handle retries/timeouts.
#     """

#     def __init__(self, login: str, password: str, base_url: str = "https://api.dataforseo.com"):
#         self.auth = (login, password)
#         self.base_url = base_url.rstrip("/")
#         self.session = requests.Session()
#         self.session.auth = self.auth
#         # DataForSEO expects JSON payloads
#         self.session.headers.update({"Content-Type": "application/json"})

#     def _build_url(self, endpoint: str) -> str:
#         if endpoint.startswith("/"):
#             return f"{self.base_url}{endpoint}"
#         return f"{self.base_url}/{endpoint}"

#     def _request(self, method: str, endpoint: str, json_data=None, params=None, timeout: int | float | None = None):
#         url = self._build_url(endpoint)
#         logger.debug(f"[RestClient] {method} {url} timeout={timeout}")
#         try:
#             resp = self.session.request(method, url, json=json_data, params=params, timeout=timeout)
#             # Raise for transport-level HTTP errors (4xx/5xx) so callers can inspect or retry if needed
#             resp.raise_for_status()
#         except requests.exceptions.RequestException as e:
#             # Re-raise - caller (DataForSEOClient) will handle retries / logging
#             logger.debug(f"[RestClient] request exception for {url}: {e}")
#             raise

#         # Try to parse JSON; if response is not JSON, raise to surface the issue
#         try:
#             return resp.json()
#         except ValueError:
#             # Non-json response — raise a descriptive error
#             err = RuntimeError(f"Non-JSON response from {url}: {resp.text[:512]}")
#             logger.error(err)
#             raise err

#     def post(self, endpoint: str, post_data, timeout: int | float | None = None):
#         return self._request("POST", endpoint, json_data=post_data, timeout=timeout)

#     def get(self, endpoint: str, timeout: int | float | None = None):
#         return self._request("GET", endpoint, timeout=timeout)

#!/usr/bin/env python

import http.client
import json
import hashlib
import urllib.parse


class RestClient:
    """
    DataForSEO REST API client
    Compatible with the original DataForSEO examples
    """
    
    domain = "api.dataforseo.com"

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def request(self, path, method, data=None):
        """Make HTTP request to API"""
        connection = http.client.HTTPSConnection(self.domain)
        
        # Prepare authorization
        credentials = f"{self.username}:{self.password}"
        base64_bytes = self._base64_encode(credentials.encode('utf-8'))
        headers = {
            'Authorization': f'Basic {base64_bytes.decode("ascii")}',
            'Content-Encoding': 'gzip'
        }
        
        # Make request
        try:
            connection.request(
                method,
                path,
                headers=headers,
                body=json.dumps(data) if data else None
            )
            
            response = connection.getresponse()
            return json.loads(response.read().decode())
            
        except Exception as e:
            print(f"ERROR: {e}")
            return None
        finally:
            connection.close()

    def get(self, path, timeout=None):
        """GET request"""
        return self.request(path, 'GET')

    def post(self, path, data, timeout=None):
        """POST request"""
        return self.request(path, 'POST', data)

    @staticmethod
    def _base64_encode(message):
        """Base64 encoding for auth"""
        import base64
        return base64.b64encode(message)

