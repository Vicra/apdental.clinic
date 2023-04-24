import { useState } from "react";
import { Form, Input, Button, message } from "antd";

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
    <div className="contact-form-container">
      <Form<ContactFormValues>
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item
          name="name"
          label="Nombre"
          rules={[{ required: true, message: "Porfavor ingrese su nombre." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Correo Electrónico"
          rules={[
            {
              required: true,
              message: "Porfavor ingrese su correo electrónico.",
            },
            { type: "email", message: "Ingrese un correo electrónico valido." },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="message"
          label="Mensaje"
          rules={[{ required: true, message: "Porfavor ingrese un mensaje." }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={submitting}>
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
