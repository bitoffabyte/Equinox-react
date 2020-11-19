import React, { useState } from "react";
import {
	Modal,
	Button,
	Form,
	Input,
	Radio,
	Select,
	Cascader,
	DatePicker,
	InputNumber,
	TreeSelect,
	Switch,
} from "antd";
const Formf = (props) => {
	const [loading, updateLoading] = useState(false);
	const [vit, updatevit] = useState(true);
	const [details, updateDetails] = useState({});
	const onFormLayoutChange = ({ College, name, email, reg, collegeName }) => {
		College
			? College == "VIT"
				? updatevit(true)
				: updatevit(false)
			: console.log("sd");
		if (College) {
			updateDetails({ ...details, College });
		}
		if (College == "VIT") {
			if (reg) {
				updateDetails({ ...details, reg });
				collegeName = undefined;
				updateDetails({ ...details, collegeName });
			}
		}
		if (College != "VIT") {
			if (collegeName) {
				updateDetails({ ...details, collegeName });
				reg = undefined;
				updateDetails({ ...details, reg: undefined });
			}
		}
		if (name) {
			updateDetails({ ...details, name });
		}
		if (email) {
			updateDetails({ ...details, email });
		}
	};
	const submit = (e) => {
		e.preventDefault();
		console.log(details);
	};
	return (
		<div>
			<Modal
				title='Register'
				centered
				visible={props.show}
				onCancel={() => props.updateShow(false)}
				width={1000}
				footer={[]}
			>
				<Form
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 14 }}
					layout='horizontal'
					initialValues={{ size: "default" }}
					onValuesChange={onFormLayoutChange}
					size='default'
					onSubmit={submit}
				>
					<Form.Item
						label='Name'
						name='name'
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label='E mail'
						name='email'
						rules={[
							{
								type: "email",
								message: "Please enter a valid mail",
							},
							{
								required: true,
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item label='College' name='College'>
						<Select defaultValue='VIT'>
							<Select.Option value='VIT'>VITian</Select.Option>
							<Select.Option value='NON VIT'>
								Non VITian
							</Select.Option>
						</Select>
					</Form.Item>
					{vit ? (
						<Form.Item
							label='Registration Number'
							name='reg'
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>
					) : (
						<Form.Item
							label='College Name'
							name='collegeName'
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>
					)}
					<Button
						key='submit'
						type='primary'
						loading={loading}
						onClick={submit}
						htmlType='submit'
						centered='true'
						style={{ float: "right" }}
					>
						Submit
					</Button>
					,
				</Form>
			</Modal>
		</div>
	);
};

export default Formf;
