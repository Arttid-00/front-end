import React from "react";
import { Space, Table, Tag } from "antd";
import NavbarEng from "../../components/NavbarEng";
import background from "./img/bg.png";
import "./Style2.css";
const columns = [
  {
    title: <span className="fontkanit">ชื่องาน</span>,
    dataIndex: "Name_Project",
    key: "Name_Project",
  },
  {
    title: <span className="fontkanit">สถานะ</span>,
    dataIndex: "status",
    key: "status",
  },
  {
    title: <span className="fontkanit">รายละเอียดงาน</span>,
    dataIndex: "detail",
    key: "detail",
  },

  {
    title: <span className="fontkanit">Action</span>,
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>แก้ไข</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    Name_Project: "name1",
    status: "25",
    number_project: "1",
    detail: "PROGRAM TO RECEIVE BARCODE 6 - 14 DIGIT",
  },
  {
    key: "1",
    Name_Project: "name1",
    status: "25",
    number_project: "2",
    detail: "PROGRAM TO RECEIVE BARCODE 6 - 14 DIGIT",
  },
  {
    key: "1",
    Name_Project: "name1",
    status: "25",
    number_project: "3",
    detail: "PROGRAM TO RECEIVE BARCODE 6 - 14 DIGIT",
  },
];
const EngStatus = () => {
  return (
    <>
      <div className="grid grid-rows-2  bg">
        <div>
          <NavbarEng />
          <div className="flex flex-row">
            <div className="basis-1/2">
              <label className="pl-5">สถานะโครงการ</label>
            </div>
            <div className="basis-1/2"></div>
            <div className="basis-1/2"></div>
            <div className="basis-1/2">
              <button class="  bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full">
                + สร้าง
              </button>
            </div>
          </div>
          <Table columns={columns} dataSource={data} />
          <div className="flex flex-row">
            <div className="basis-1/2"></div>
            <div className="basis-1/2"></div>
            <div className="basis-1/2"></div>

            
          </div>
        </div>
        <div style={{ backgroundImage: `url(${background})` }}></div>
      </div>
    </>
  );
};
export default EngStatus;
