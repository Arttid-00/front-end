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
import NavbarEng from "../../components/NavbarEng";
import "./Style2.css";
import background from "./img/bg.png";
const EngCreateFormstatust = () => {
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
      <NavbarEng />
      <br />
      <div className="flex ">
        <div className="flex-none w-26 "></div>
        <div className="flex-1 w-32 ">
          <Card
            className="font"
            title="รายงานเข้าพบลูกค้า"
            bordered={false}
            headStyle={{ backgroundColor: "#FA465E" }}
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
              <Form.Item label="ชื่่องาน">
                <Input />
              </Form.Item>

              <Form.Item label="จาก">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio className="font" value={1}>
                    25%
                  </Radio>
                  <Radio className="font" value={2}>
                    50%
                  </Radio>
                  <Radio className="font" value={2}>
                    100%
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item label="ราะละเอียด">
                <Input className=" h-36" />
              </Form.Item>
            </Form>

            <div className="pl-80 text-center">
              <div>
                {" "}
                <button className="rounded-lg w-20  bg-rose-600  hover:bg-[rose] ">
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

export default EngCreateFormstatust;
