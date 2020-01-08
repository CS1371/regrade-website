deploy:
	@rm -rf build
	@yarn build
	@ssh -t cs1371ftp@cs1371.gatech.edu 'rm -rf /httpdocs/regrades && mkdir /httpdocs/regrades'
	@# for macOS
	@cd build && find . -name '.DS_Store' -type f -delete
	@scp -r build/* cs1371ftp@cs1371.gatech.edu:~/httpdocs/regrades
