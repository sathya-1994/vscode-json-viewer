import { GlspVscodeConnector, NavigateAction } from '@eclipse-glsp/vscode-integration';
import {
    configureDefaultCommands,
    GlspServerLauncher,
    SocketGlspVscodeServer
} from '@eclipse-glsp/vscode-integration/lib/quickstart-components';
import 'reflect-metadata';
import * as vscode from 'vscode';
import JsonViewerEditorProvider from './jsonviewer-editor-provider'

const SERVER_PORT = '5007';

export async function activate(context: vscode.ExtensionContext): Promise<void> {

    const jsonViewerServer = new SocketGlspVscodeServer({
        clientId: 'jsonviewer',
        clientName: 'jsonviewer',
        serverPort: JSON.parse(SERVER_PORT)
    });

    const glspVscodeConnector = new GlspVscodeConnector({
        server: jsonViewerServer,
        logging: true
    });

    const customEditorProvider = vscode.window.registerCustomEditorProvider(
        'jsonviewer.glspDiagram',
        new JsonViewerEditorProvider(context, glspVscodeConnector),
        {
            webviewOptions: { retainContextWhenHidden: true },
            supportsMultipleEditorsPerDocument: false
        }
    );
}