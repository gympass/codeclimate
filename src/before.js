import { runTool } from './common';

let cmds = async () => {
    await runTool('/gympass/codeclimate-setup', []);
    await runTool('codeclimate-reporter', ['before-build']);
}

cmds()
