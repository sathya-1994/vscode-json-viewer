import { createWorkflowDiagramContainer } from '@eclipse-glsp-examples/workflow-glsp';
import { GLSPStarter } from '@eclipse-glsp/vscode-integration-webview';
import '@eclipse-glsp/vscode-integration-webview/css/glsp-vscode.css';
import { Container } from 'inversify';
import { SprottyDiagramIdentifier } from 'sprotty-vscode-webview';

class JsonViewerStarter extends GLSPStarter {
    createContainer(diagramIdentifier: SprottyDiagramIdentifier): Container {
        return createWorkflowDiagramContainer(diagramIdentifier.clientId);
    }
}

export function launch(): void {
    new JsonViewerStarter();
}
