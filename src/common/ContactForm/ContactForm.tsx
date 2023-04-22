import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { FormInstance } from "antd/lib/form";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [form] = Form.useForm();

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);

    try {
      // Your code to handle the form submission goes here, e.g.:
      // await api.sendContactForm(values);
      message.success("Thank you for contacting us!");
      form.resetFields();
    } catch (error) {
      message.error("An error occurred. Please try again later.");
    }

    setSubmitting(false);
  };

  return (
    <Form<ContactFormValues> form={form} onFinish={handleSubmit}>
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please enter your name." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Please enter your email address." },
          { type: "email", message: "Please enter a valid email address." },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="message"
        label="Message"
        rules={[{ required: true, message: "Please enter your message." }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={submitting}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
