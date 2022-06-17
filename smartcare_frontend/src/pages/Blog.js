import { Col, Row } from "antd";
import React from "react";
import BlogCard from "../components/Card/BlogCard";
import DefaultLayout from "../layouts/DefaultLayout";
import api_blog from "../assets/mock_api_blog";
// import axios from "../global/axios";

export default function Blog() {
  // let data
  // axios.get("/blogs").then((res) => {
  //   data = res.data.data
  //   console.log(data)
  // })

  const imgSrc =
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
  return (
    <DefaultLayout>
      <div className="container">
        <Row gutter={[32, 32]}>
          {api_blog.map((item) => (
            <Col span={8}>
              <BlogCard
                id={item.id}
                image={imgSrc}
                title={item.title}
                content={item.content}
              />
            </Col>
          ))}
        </Row>
      </div>
    </DefaultLayout>
  );
}
