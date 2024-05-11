import React, { useState } from "react";
import {
  Card,
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import Navbar from "../../components/Navbar";
import "./Style1.css";
import background from "./img/bg.png";
const EditFormreport = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="grid grid-rows-2">
       <Navbar />
      <br />
      <div className="flex ">
        <div className="flex-none w-26 "></div>
        <div className="flex-1 w-32 ">
          <Card
            className="font"
            title="รายงานเข้าพบลูกค้า"
            bordered={false}
            headStyle={{ backgroundColor: "#49ba67 " }}
            style={{
              backgroundColor: "#d4d4d4",
              width: 600, // ปรับ width ให้เล็กลง
              maxWidth: 800, // เพิ่ม max-width
              margin: "auto", // เพิ่ม margin: auto
            }}
          >
            <Form
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              layout="horizontal"
              initialValues={{ size: componentSize }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
              style={{ maxWidth: 800 }}
            >
              <Form.Item label="วันที่เข้าพบลูกค้า">
                <Input />
              </Form.Item>
              <Form.Item label="จาก">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio className="font" value={1}>
                    Automationservere
                  </Radio>
                  <Radio className="font" value={2}>
                    Exintech
                  </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="ชื่อลูกค้า">
                <Input />
              </Form.Item>
              <Form.Item label="หมายเลขโทรศัพท์">
                <Input />
              </Form.Item>
              <Form.Item label="ชื่อเจ้าหน้าที่">
                <Input />
              </Form.Item>
              <Form.Item label="สถานะ">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio className="font" value={1}>
                    เข้าพบ
                  </Radio>
                  <Radio className="font" value={2}>
                    ไม่ได้เข้าพบ
                  </Radio>
                  <Radio className="font" value={3}>
                    เข้าพบภายหลัง
                  </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="การเช็คอิน">
                <Input className="" addonBefore="START" />
                <Input addonBefore="END" />
              </Form.Item>

              <Form.Item label="หมายเหตุ">
                <Input />
              </Form.Item>
            </Form>

            <div className="pl-80 text-center">
              <div>
                {" "}
                <button className="rounded-lg w-20  bg-green-600  hover:bg-[green] ">
                  บันทึก
                </button>
              </div>
              <br />
            </div>
          </Card>
        </div>
      </div>
      <div
      className="bg"
        style={{ backgroundImage: `url(${background})`, height: "30vh" }}
      ></div>
    </div>
  );
};

export default EditFormreport;
