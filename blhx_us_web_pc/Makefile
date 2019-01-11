#测试环境代码发布
sync-prod:
	rsync -az -v -r --force \
	  --filter="- node_modules" \
		--filter="- *.js.map" \
	  -e "ssh -p 22" \
	  ./dist/ \
			dc2-user@116.85.33.135:~/web/adpc

deploy-prod:sync-prod