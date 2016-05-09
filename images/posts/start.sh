export RESILIENCY_CACHENAME=RES_CACHE
export VCAP_SERVICES='{"cloudantNoSQLDB":[{"name":"RES_CACHE","label":"cloudantNoSQLDB","plan":"Shared","credentials":{"username":"7b155b37-97c8-4d6b-9bf9-b11d2ea4ba0f-bluemix","password":"a42258aa92bf7f5830b84e5f7109e8276965af200696ff72fcfc46da2b0b4d6c","host":"7b155b37-97c8-4d6b-9bf9-b11d2ea4ba0f-bluemix.cloudant.com","port":443,"url":"https://7b155b37-97c8-4d6b-9bf9-b11d2ea4ba0f-bluemix:a42258aa92bf7f5830b84e5f7109e8276965af200696ff72fcfc46da2b0b4d6c@7b155b37-97c8-4d6b-9bf9-b11d2ea4ba0f-bluemix.cloudant.com"}}],
"DataCache-1.0":[{"name":"platform-cache","label":"DataCache-1.0","plan":"starter","credentials":{"catalogEndPoint":"23.246.194.82:2809,23.246.194.83:2809","restResource":"https://ecaas28.stage1.ng.bluemix.net/resources/datacaches/ixQ7aoIXQ1Ozh489dkTCLgCT","restResourceSecure":"https://ecaas28.stage1.ng.bluemix.net/resources/datacaches/ixQ7aoIXQ1Ozh489dkTCLgCT","gridName":"ixQ7aoIXQ1Ozh489dkTCLgCT","username":"AmQYve3kR66bzMiRkAOCOgXH","password":"RbjkOz2zSMykaGWVS6NCVQND"}}]}'
export SESSION_CACHENAME='platform-cache'
export SESSION_KEY='opsConsole.sid'
export SESSION_SECRET='5461697E8FF2D5C596A72316DA3B451D'
export UAA_CALLBACK_URL='https://dev-console.stage1.ng.bluemix.net/login/callback'
export BLUEMIX_HOST='stage1.ng.bluemix.net'
export UAA_CLIENT_ID='jtace'
export UAA_CLIENT_SECRET='foobar'
npm run start