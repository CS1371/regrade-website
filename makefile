deploy:
	@rm -rf build
	@yarn build
	@# Get current homework files
	@rm -rf ./tmp
	@mkdir tmp
	@scp -r cs1371ftp@cs1371.gatech.edu:/httpdocs/regrades/rubrics/. tmp
	@ssh -t cs1371ftp@cs1371.gatech.edu 'rm -rf /httpdocs/regrades && mkdir /httpdocs/regrades'
	@# for macOS
	@cd build && find . -name '.DS_Store' -type f -delete
	@scp -r build/. cs1371ftp@cs1371.gatech.edu:/httpdocs/regrades
	@# Copy back files
	@scp -r tmp/. cs1371ftp@cs1371.gatech.edu:/httpdocs/regrades/rubrics/

local:
	@rm -rf build
	@yarn build

deploy-init:
	@rm -rf build
	@yarn build
	@ssh -t cs1371ftp@cs1371.gatech.edu 'rm -rf /httpdocs/regrades && mkdir /httpdocs/regrades'
	@# for macOS
	@cd build && find . -name '.DS_Store' -type f -delete
	@scp -r build/. cs1371ftp@cs1371.gatech.edu:/httpdocs/regrades

clean:
	@rm -rf build
	@rm -rf tmp

install:
	@rm -rf node_modules
	@yarn install
