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
        title: <span className="fontkanit">เริ่มต้น</span>,
        dataIndex: "start",
        key: "start",
      },
      {
        title: <span className="fontkanit">สิ้นสุด</span>,
        dataIndex: "end",
        key: "end",
      },
      {
        title: <span className="fontkanit">ระยะทาง</span>,
        dataIndex: "distance",
        key: "distance",
      },
    
      {
        title: <span className="fontkanit">ค่าใช้จ่าย</span>,
        dataIndex: "expenses",
        key: "expenses",
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
        start: "บางพลี",
        end: "C.C Thai ",
        distance:"203",
        expenses: "4259",
      },
      {
        key: "1",
        date: "14-Sep-23",
        start: "บางพลี",
        end: "C.C Thai ",
        distance:"203",
        expenses: "4259",
      },
      {
        key: "1",
        date: "14-Sep-23",
        start: "บางพลี",
        end: "C.C Thai ",
        distance:"203",
        expenses: "4259",
      },
];
const EngTravel = () => {
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
export default EngTravel;
