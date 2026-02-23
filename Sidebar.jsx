import React from "react";
import { Input, Button } from "antd";
import { SendOutlined, PhoneOutlined } from "@ant-design/icons";
import "./../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column">

      {/* 🔹 Yuqori qism – ochroq fon, 50vh */}
      <div className="sidebar-top">
        <h3 className="fw-bold">Yordam kerakmi?</h3>
        <p className="text-muted">
          Savollaringiz bormi? <br />
          Biz sizga yordam berishga tayyormiz.
        </p>

        {/* Telegram input */}
        <Input
          className="custom-input"
          readOnly
          prefix={
            <div className="input-prefix">
              <SendOutlined className="icon" />
              <div>
                <h5>Telegram bot</h5>
                <span>@olimpiada</span>
              </div>
            </div>
          }
        />

        {/* Telefon input */}
        <Input
          className="custom-input mt-3"
          readOnly
          prefix={
            <div className="input-prefix">
              <PhoneOutlined className="icon" />
              <div>
                <h5>Ishonch telefon</h5>
                <span>+998 (71) 200 00 00</span>
              </div>
            </div>
          }
        />

        {/* Tugma */}
        <Button className="contact-btn mt-3" type="primary">
          Habar qoldirish
        </Button>
      </div>

            {/* 🔹 Pastki qism – rasm alohida, 35vh */}
        <div className="sidebar-bottom">
        <div className="image-text">
            <h5>Ma'lumot markazi</h5>
            <p>24/7 Qo'llab-quvvatlash</p>
        </div>
        </div>

    </div>
  );
}

export default Sidebar;