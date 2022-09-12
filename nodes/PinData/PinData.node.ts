import { IExecuteFunctions } from 'n8n-core';
import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';

export class PinData implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Pin Data',
		name: 'pinDataNode',
		group: ['transform'],
		version: 1,
        icon: 'fa:thumbtack',
		description: 'A Node that pins data and keeps it pins until a reset is triggered',
		defaults: {
			name: 'Pin Data',
			color: '#222222',
		},
		inputs: ['main', 'main'],
		inputNames: ['Input', 'Update'],
		outputs: ['main'],
		outputNames: ['Output'],
		properties: [
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		let item: INodeExecutionData;

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {

		}

		return this.prepareOutputData(items);
	}
}