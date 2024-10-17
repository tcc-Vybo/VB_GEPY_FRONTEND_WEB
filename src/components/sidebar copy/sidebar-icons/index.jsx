import { Menu } from 'antd';
import './style.css';
import { HomeOutlined } from '@ant-design/icons';

export default function SidebarIconAnt({ name }) {
  return (
    <Menu className='sidebar-icon'>
      <Menu.Item key={name} icon={<HomeOutlined />}>
        <img src='' alt='' />
        <p>{name}</p>
      </Menu.Item>
    </Menu>
  );
}
