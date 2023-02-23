node
{
	environment {
    NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
}
    stage('CheckOutcode'){
        git 'https://github.com/ramakrishna8254/nodejs-app-cloud4c.git'
    }
    stage('Build'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.0'){
        sh "npm install"
    }
    }
	stage('Test'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.0'){
        sh "npm run test"
    }
    }	
    stage('ExecuteSonarQubeReport'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.0'){
        sh "npm run sonar"
    }
    }
    stage('UploadArtifactintoNexus'){
	    sh "npm publish"
    }
    stage('RunNodeJsApp')
{
sh "sudo killall -9 node"
sh "sudo nohup npm start &"
}

}
