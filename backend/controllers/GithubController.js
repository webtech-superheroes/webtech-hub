const { Octokit } = require("@octokit/rest");
const git = require('simple-git');



module.exports.getUserRepos = async (req, res) => {
    const octokit = new Octokit({auth: req.user.token});
    try {
        let repos = await octokit.request('GET /user/repos?visibility=private')
        res.json(repos)
    } catch(e) {
        console.log(e)
        res.status(500).send(e)
    }
}

module.exports.createRepo = async (req, res) => {
    try {
        const octokit = new Octokit({auth: req.user.token});
        let repos = await octokit.request('POST /user/repos', {
            name: 'exam-prep6',
            description: 'homework',
            private: true
          })

        const path = '/app/homework';  
        let remote = repos.data['html_url'] + '.git'
        await git(path).addRemote(repos.data['full_name'].replace('/', '_'), remote)
        await git(path).push(remote.replace('://', `://${req.user.username}:${req.user.token}@`), 'master')   
          
        res.json(repos)
    } catch(e) {
        console.log(e)
        res.status(500).send(e)
    }
}

module.exports.createRepoFromTemplate = async (req, res) => {
    
    try {
        const octokit = new Octokit({auth: req.user.token});
        let repos = await octokit.request('POST /repos/:template_owner/:template_repo/generate', {
            template_owner: 'webtech-superheroes',
            template_repo: 'exam-prep',
            name: 'exam-prep',
            description: 'homework',
            private: true,
            mediaType: {
              previews: [
                'baptiste'
              ]
            }
          })

          
        res.json(repos)
    } catch(e) {
        console.log(e)
        res.status(500).send(e)
    }
}

module.exports.listPendingInvitations = async (req, res) => {
    try {
        const octokit = new Octokit({auth: req.user.token});
        let repos = await octokit.request('POST /repos/:template_owner/:template_repo/generate', {
            template_owner: 'webtech-superheroes',
            template_repo: 'exam-prep',
            name: 'exam-prep',
            description: 'homework',
            private: true,
            mediaType: {
              previews: [
                'baptiste'
              ]
            }
          })

          
        res.json(repos)
    } catch(e) {
        console.log(e)
        res.status(500).send(e)
    }
}