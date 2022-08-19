
import os
import requests

headers = {"Authorization": f'token ${{ secrets.GITHUB_TOKEN }}',
           "Accept": "application/vnd.github+json"}
res = requests.get(f"https://api.github.com/repos/${{ github.repository_owner }}/${{ github.repository }}/collabolators", headers = headers)
print(res)