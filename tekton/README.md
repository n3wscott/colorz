Apply the yaml,

assuming a port forward of:

```
kubectl port-forward $(kubectl get pod -o=name -l eventlistener=listener) 8080
```

and invoke with:

```
curl -X POST \
  http://localhost:8080 \
  -H 'Content-Type: application/json' \
  -d '{
  "registry": {"url": "gcr.io/snichols-vmw/colorz:latest"},
  "repository": {"url": "https://github.com/n3wscott/colorz.git"}
}'
```

or on the custer:
```
curl -X POST \
  http://el-listener.default.svc.cluster.local:8080 \
  -H 'Content-Type: application/json' \
  -d '{
  "registry": {"url": "gcr.io/snichols-vmw/colorz:latest"},
  "repository": {"url": "https://github.com/n3wscott/colorz.git", "revision":"<sha or branch>"}
}'
```