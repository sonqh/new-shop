import { Select, Typography } from "antd";
import { FC } from "react";

const { Option } = Select;

interface DropdownFilterProps {
  items: { label: string; value: string }[];
  name: string;
  onChange: (value: string) => void;
}

const DropdownFilter: FC<DropdownFilterProps> = ({ items, name, onChange }) => {
  const handleSelectChange = (value: string) => {
    onChange(value);
  };

  return (
    <div>
      <Typography.Title level={5}>
        <span className="filter-label">{name}</span>
      </Typography.Title>
      <Select className="w-full" onChange={handleSelectChange} allowClear>
        {items.map((item, index) => (
          <Option key={index} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default DropdownFilter;
