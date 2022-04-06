import * as core from '@actions/core';
import * as exec from '@actions/exec';

export const runTool = async (cmd, args) => {
  try {
    await exec.exec(cmd, args);
  } catch(err) {
    console.error("Error running command: ", err);
    process.exit(1);
  }
};
