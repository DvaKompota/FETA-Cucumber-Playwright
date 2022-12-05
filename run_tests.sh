#cucumber tag
tag=$1

export CONFIG_FILE='src/tests/react-app/setup/config.env'

#run cucumber tests & on failure run postcucumber
yarn run cucumber --profile $tag || yarn run postcucumber