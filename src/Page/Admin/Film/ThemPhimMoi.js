import React, { useState } from 'react'

import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ThemFilm from './ThemFilm';

const { Option } = Select;


export default function ThemPhimTemplate() {

    // state = { visible: false };

    const [state, setState] = useState({
        visible: false
    })

    const showDrawer = () => {
        setState({
            visible: true,
        });
    };

    // const onClose = () => {
    //     setState({
    //         visible: false,
    //     });
    // };

    return (
        <div className="" >
            <Button className="rounded" type="primary" onClick={showDrawer}>
                <i class="fa fa-plus mr-2"></i><i className="fa fa-film mx-2" />
Thêm phim
            </Button>
            <Drawer
                title="Thêm phim mới"
                width={720}
                // onClose={onClose}
                visible={state.visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        {/* <Button onClick={onClose} style={{ marginRight: 8 }}>
                            Cancel
              </Button> */}

                    </div>
                }

            >
                <Form layout="vertical" hideRequiredMark>
                    <ThemFilm />
                </Form>
            </Drawer>
        </div>
    )
}
