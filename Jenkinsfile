node
{
    stage('CheckOutcode'){
        git 'https://github.com/ramakrishna8254/nodejs-app-cloud4c.git'
    }
     stage('Build'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.1'){
        sh "npm install"
    }
     stage('ExecuteSonarQubeReport'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.1'){
        sh "npm run sonar"
    }
    }
    stage('UploadArtifactintoNexus'){
	    sh "npm publish"
    }
     }
     stage('RunNodeJSApp'){
	sh "sudo kill -9 "$(sudo lsof -t -i:9981)""
        sh "sudo nohup npm start &"
    }
}
