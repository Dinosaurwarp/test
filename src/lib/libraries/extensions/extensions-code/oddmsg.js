// credits to silvxrcat
const icon = 'data:image/png;base64,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';

class OddMessage {
    constructor(runtime) {
        this.runtime = runtime;
        this.messageQueue = [];
        this.recording = [];
        this.logs = [];
        this.recordingDelay = 1000;
    }
    getInfo() {
        return {
            id: 'oddMessage',
            name: 'Odd Messages',
            menuIconURI: icon,
            blockIconURI: icon,
            color1: '#BE00FF',
            blocks: [
                {
                    opcode: 'emit',
                    blockType: 'command',
                    text: 'emit [a] [b]',
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 'message',
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'data',
                        },
                    },
                },
                {
                    opcode: 'on',
                    blockType: 'hat',
                    text: 'on [a] set [b]',
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 'message',
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'variable',
                            menu: 'variables',
                        },
                    },
                },
                '---',
                {
                    opcode: 'whenVarChange',
                    blockType: 'hat',
                    text: 'when [a] changes',
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 'variable',
                            menu: 'variables',
                        },
                    },
                },
                {
                    opcode: 'recordVar',
                    blockType: 'command',
                    text: 'record [a] in list [b]',
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 'variable',
                            menu: 'variables',
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'list',
                            menu: 'lists',
                        },
                    },
                },
                {
                    opcode: 'stopRecording',
                    blockType: 'command',
                    text: 'stop recording [a]',
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 'variable',
                            menu: 'variables',
                        },
                    },
                },
                {
                    opcode: 'setRecordingDelay',
                    blockType: 'command',
                    text: 'set recording delay to [a]',
                    arguments: {
                        a: {
                            type: 'number',
                            defaultValue: 1000,
                        },
                    },
                },
                '---',
                {
                    opcode: 'logToJSON',
                    blockType: 'reporter',
                    text: 'list logs',
                },
                {
                    opcode: 'log',
                    blockType: 'command',
                    text: 'log [a] as [b]',
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 'message',
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'warn',
                        },
                    },
                },
                {
                    opcode: 'logClear',
                    blockType: 'command',
                    text: 'clear logs',
                },
                {
                    opcode: 'logToArray',
                    blockType: 'reporter',
                    text: '#[n] log as array',
                    arguments: {
                        n: {
                            type: 'number',
                            defaultValue: 0,
                        },
                    },
                },
            ],
            menus: {
                variables: {
                    acceptReporters: true,
                    items: '_getVariableMenu',
                },
                lists: {
                    acceptReporters: true,
                    items: '_getListMenu',
                },
            },
        }
    }
    _getVariableMenu() {
        const vars = this.runtime.getAllVarNamesOfType('')
		return vars.length == 0 ? [" "] : vars
    }
    _getListMenu() {
        const lists = this.runtime.getAllVarNamesOfType('list')
        return lists.length == 0 ? [" "] : lists
    }
    log({ a, b }) {
        this.logs.push({ log: a, type: b });
    }
    logClear() {
        this.logs = [];
    }
    logToArray({ n }) {
        let a = this.logs[n];
        if (a) {
            return JSON.stringify([a.log, a.type]);
        } else {
            return '[]';
        }
    }
    logToJSON() {
        return JSON.stringify(this.logs);
    }
    emit({ a, b }) {
        this.messageQueue.push([a, b]);
    }
    on({ a, b }) {
        if (this.messageQueue.length == 0) return false;
        if (this.messageQueue[0][0] == a) {
            this.runtime.getTargetForStage().lookupVariableByNameAndType(b).value = this.messageQueue[0][1];
            this.messageQueue.shift();
            return true
        } else {
            return false
        }
    }
    async whenVarChange({ a }) {
        if (!this.runtime.getTargetForStage().lookupVariableByNameAndType(a)) return false;
        let b = this.runtime.getTargetForStage().lookupVariableByNameAndType(a).value;
        await new Promise(resolve => {setTimeout(resolve, 100)});
        let c = this.runtime.getTargetForStage().lookupVariableByNameAndType(a).value;
        return b != c;
    }
    async recordVar({ a, b }) {
        if (this.recording.includes(a)) return;
        const delay = async (ms) => {await new Promise(r => setTimeout(r, ms))};
        this.recording.push(a);
        while (this.recording.includes(a)) {
            await delay(this.recordingDelay);
            let c = this.runtime.getTargetForStage().lookupVariableByNameAndType(a).value;
            let d = this.runtime.getTargetForStage().lookupVariableByNameAndType(b, 'list');
            d.value.push(c);
        }
    }
    stopRecording({ a }) {
        if (this.recording.includes(a)) {
            this.recording.splice(this.recording.indexOf(a), 1);
        }
    }
    setRecordingDelay({ a }) {
        this.recordingDelay = a;
    }
}

Scratch.extensions.register(new OddMessage(Scratch.vm.runtime))