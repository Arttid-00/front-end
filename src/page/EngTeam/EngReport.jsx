import React from "react";
import { Space, Table, Tag } from "antd";
import NavbarEng from "../../components/NavbarEng";
import background from "./img/bg.png";
import "./Style2.css";
const columns = [
  {
    title: <span className="fontkanit">วันที่เข้าพบ</span>,
    dataIndex: "date",
    key: "date",
    render: (text) => <a>{text}</a>,
  },
  {
    title: <span className="fontkanit">ชื่อลูกค้า</span>,
    dataIndex: "custormer",
    key: "custormer",
  },
  {
    title: <span className="fontkanit">เลขที่โครงการ</span>,
    dataIndex: "number_project",
    key: "number_project",
  },
  {
    title: <span className="fontkanit">รายละเอียดงาน</span>,
    dataIndex: "detail",
    key: "detail",
  },
  {
    title: <span className="fontkanit">เวลาเริ่มต้น-สิ้นสุด</span>,
    dataIndex: "time",
    key: "time",
  },
  {
    title: <span className="fontkanit">ระยะทาง</span>,
    dataIndex: "distant",
    key: "distant",
  },
  {
    title: <span className="fontkanit">ค่าใช้จ่าย</span>,
    dataIndex: "exp",
    key: "exp",
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
    date: "14-Sep-23",
    custormer: "auto",
    number_project: "1",
    detail: "Change solenoid valve and rewiring motor cable",
    time: "08:00-17:00",
    distant: "85",
    exp: "425",
  },
  {
    key: "1",
    date: "14-Sep-23",
    custormer: "auto",
    number_project: "2",
    detail: "Change solenoid valve and rewiring motor cable",
    time: "08:00-17:00",
    distant: "85",
    exp: "425",
  },
  {
    key: "1",
    date: "14-Sep-23",
    custormer: "auto",
    number_project: "3",
    detail: "Change solenoid valve and rewiring motor cable",
    time: "08:00-17:00",
    distant: "85",
    exp: "425",
  },
];
const EngReport = () => {
  return (
    <>
      <div className="grid grid-rows-2  bg">
        <div>
          <NavbarEng />
          <div className="flex flex-row">
            <div className="basis-1/2">
              <label className="pl-5">รายงานโครงการ</label>
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
            <div className="basis-1/2">
             
            </div>

            <div className="basis-1/2">
            <div className=" text-2xl">309 km 1,534 บาท </div>
              <button class="  bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full">
                ส่งรายงาน
              </button>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${background})` }}></div>
      </div>
    </>
  );
};
export default EngReport;
