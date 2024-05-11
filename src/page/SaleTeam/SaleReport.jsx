import React from "react";
import { Space, Table, Tag } from "antd";
import Navbar from "../../components/Navbar";
import background from "./img/bg.png";
import "./Style1.css";
const columns = [
  {
    title: <span className="fontkanit">วันที่เข้าพบ</span>,
    dataIndex: "date",
    key: "date",
    render: (text) => <a>{text}</a>,
  },
  {
    title: <span className="fontkanit">จาก</span>,
    dataIndex: "from",
    key: "from",
  },
  {
    title: <span className="fontkanit">รายละเอียดงาน</span>,
    dataIndex: "detail",
    key: "detail",
  },
  {
    title: <span className="fontkanit">หมายเลขโทรศัพท์</span>,
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: <span className="fontkanit">สถานะ</span>,
    dataIndex: "status",
    key: "status",
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
    from: "auto",
    detail: "โรงงานเบียร์",
    phone: "999-999-9999",
    status: "เข้าพบภายหลัง",
  },
  {
    key: "1",
    date: "14-Sep-23",
    from: "Automationserve",
    detail: "โรงงานเบียร์",
    phone: "999-999-9999",
    status: "ไม่ได้เข้าพบ",
  },
  {
    key: "1",
    date: "14-Sep-23",
    from: "Exintech",
    detail: "โรงงานเบียร์",
    phone: "999-999-9999",
    status: "เข้าพบ",
  },
];
const SaleReport = () => {
  return (
    <>
      <div className="grid grid-rows-2  bg">
        <div>
          <Navbar />
          <div className="flex flex-row">
            <div className="basis-1/2">
              <label className="pl-5">รายงานการเข้าพบลูกค้า</label>
            </div>
            <div className="basis-1/2 "></div>
            <div className="basis-1/2 "></div>
            <div className="basis-1/2 ">
              <button class="  bg-emerald-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                + สร้าง
              </button>
            </div>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
        <div style={{ backgroundImage: `url(${background})` }}></div>
      </div>
    </>
  );
};
export default SaleReport;
