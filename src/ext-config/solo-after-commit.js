const vscode = require("vscode");
const { watchForCommit } = require("../git/watch-for-commit");
const { mob } = require("../git/commands");

exports.soloAfterCommit = function soloAfterCommit(coAuthorProvider) {
  vscode.workspace.onDidChangeConfiguration((evt) => {
    if (evt.affectsConfiguration("gitMob.postCommit")) {
      const config = vscode.workspace.getConfiguration("gitMob.postCommit");
      soloSwitch(coAuthorProvider, config.get("solo"));
    }
  });

  const config = vscode.workspace.getConfiguration("gitMob.postCommit");
  soloSwitch(coAuthorProvider, config.get("solo"));
};

let watch = null;
function soloSwitch(coAuthorProvider, afterCommitOn) {
  if (afterCommitOn) {
    watch = watchForCommit(function () {
      mob.solo();
      coAuthorProvider.reloadData();
    });
  } else {
    if (watch) {
      watch.close();
      watch = null;
    }
  }
}
