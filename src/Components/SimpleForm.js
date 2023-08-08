  import { Input, InputNumber, Button, Space, Table, Tag } from 'antd';
  import { PlusOutlined } from '@ant-design/icons';
  import { useState } from 'react';
  import { Form } from 'react-bootstrap'; 
  import Header from './Header';
  const { Column, ColumnGroup } = Table;


  const SimpleForm = (props) => {
      // const layout = {
      //     labelCol: { span: 8 },
      //     wrapperCol: { span: 16 },
      //   };
      const styleGray = {textAlign : 'right', width:'60%'};
      const blog = [
          {
            key: 1,
            title: 'John',
            subTitle: 'Brown',
            author: 'Steve Smith',
          },
          {
            key: 2,
            title: 'John',
            subTitle: 'Brown',
            author: 'Peter Parker',
          },
          {
            key: 3,
            title: 'John',
            subTitle: 'Brown',
            author: 'Ethen',
          }
        ]
        
        const [data, setData] = useState(blog)
        const [title, setTitle] = useState("");
        const [subTitle, setSubTitle] = useState("");
        const [author, setAuthor] = useState("");
        const [isSubmit,setIsSubmit] = useState(false);
        const [isEdit, setIsEdit] = useState(false);
        const [index, setIndex] = useState("");
        const [isView, setIsView] = useState(false);

        const addNewBlog = (e) => {
          e.preventDefault();  
          let object = {
              key:Math.floor((Math.random()*10)),
              title: title,
              subTitle: subTitle,
              author: author
          }
          setData([...data, object]);
          console.log(data);
          setIsSubmit(false);
          clearForm();
        }
        const viewNewBlog = (data) => {
            console.log(data);
            setIsView(true);
            setTitle(data['title'])
            setAuthor(data['author']);
            setSubTitle(data['subTitle']);
            setIndex(data['key'])
          }
        const editBlogDetails = (e) => {
          e.preventDefault();
          let object = {
              key: index,
              title: title,
              subTitle: subTitle,
              author: author
          }
          const updatedItems = [...data];
          var foundIndex = updatedItems.findIndex(x => x.key === index);
          updatedItems[foundIndex] = object;
          setData(updatedItems);
          setIsEdit(false);
          clearForm();
        }


        const editBlog = (data) => {
          //e.preventDefault();
          setIsEdit(true);
          setTitle(data['title'])
          setAuthor(data['author']);
          setSubTitle(data['subTitle']);
          setIndex(data['key'])
        }
      const deleteBlog = (id) => {
          let updatedBlog = [...data];
          console.log(updatedBlog);
          updatedBlog = updatedBlog.filter(obj => obj.key !== id)
          setData(updatedBlog);
      }

      const addBlogHandler = () => {
          setIsSubmit(true);
      }

      const clearForm = () => {
          setTitle("");
          setSubTitle("");
          setAuthor("");
        }
      // const submitHandler = (e) => {
      //     e.preventDefault();
      //     console.log('a')
      //     console.log(title);
      // }

      return (
      <>
      <Header isLoggedIn={props.isLoggedIn} />
      <div style={styleGray}>
      <PlusOutlined onClick={() => addBlogHandler()}/>
      </div>
    <Table dataSource={data}>
      {/* <ColumnGroup title="Name"> */}
        <Column title="Blog ID" dataIndex="key" key="key" />
        <Column title="Title" dataIndex="title" key="title" />
      {/* </ColumnGroup> */}
      <Column title="Sub Title" dataIndex="subTitle" key="subTitle" />
      <Column title="Author" dataIndex="author" key="author" />
      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle">
            <Button type="primary" onClick={() => viewNewBlog(record)}>View</Button>
            <Button type="primary" onClick={() => editBlog(record)}>Edit</Button>
            <Button danger onClick={() => deleteBlog(record.key)}>Delete</Button>
          </Space>
        )}
      />
    </Table>

    {(isSubmit || isEdit) && (<Form>
          <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
          </Form.Group>
          <Form.Group controlId="subTitle">
              <Form.Label>Sub Title</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Enter Sub-Title"
                  value={subTitle}
                  onChange={(e) => setSubTitle(e.target.value)}
              />
          </Form.Group>
          <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Enter Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
              />
          </Form.Group>
          <Button hidden={isEdit} type="submit" className="mt-2" onClick={addNewBlog}>
                          Submit
          </Button>
          <Button hidden={isSubmit} type="submit" className="mt-2" onClick={editBlogDetails}>
                          Update
          </Button>
          
    </Form> )}
    {isView && <div>
      {/* <p>Blog Id: {key}</p> */}
      <p>Title: {title}</p>
      <p>Sub-Title: {subTitle}</p>
      <p>Author: {author}</p>
      </div>}
      </>
      )
  }
  export default SimpleForm;
