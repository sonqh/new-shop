import { useAppDispatch, useAppSelector } from "@/app/hooks";
import close from "@/assets/images/close.png";
import { PRICE_ITEMS, THEME_ITEMS, TIME_ITEMS } from "@/constant/contants";
import { fetchCategories } from "@/redux/category/categorySlice";
import { setFilter } from "@/redux/filters/filterSlice";
import { SearchParams, searchProducts } from "@/redux/products/productsSlice";
import { DropdownFilter } from "@/widgets/DropdownFilter";
import { Flex, Form, Slider } from "antd";
import { omitBy } from "lodash";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { LuSearch } from "react-icons/lu";

const marks = {
  0: "0 ETH",
  300: "300 ETH",
};

const sliderStyles = {
  track: {
    background: "#d53f8c",
  },
};

const defaultFilters: SearchParams = {
  theme: "",
  time: "",
  price: "",
  tier: "",
};

const LeftContent: FC = () => {
  const [selectedValue, setSelectedValue] = useState([30, 200]);
  const [filters, setFilters] = useState(defaultFilters);
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();

  const tiers = useAppSelector((state) => state?.tiers?.tiers || []);

  const itemsTier = useMemo(
    () =>
      tiers.map((tier) => ({
        label: tier.name,
        value: tier.key,
      })),
    [tiers],
  );

  const filterConfigs = [
    { name: "Tier", items: itemsTier, key: "tier" },
    { name: "Theme", items: THEME_ITEMS, key: "theme" },
    { name: "Time", items: TIME_ITEMS, key: "time" },
    { name: "Price", items: PRICE_ITEMS, key: "price" },
  ];

  const handleSliderChange = (value: number[]) => {
    setSelectedValue(value);
  };

  const formatter = (value: number | undefined) => {
    return <span>{value} ETH</span>;
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleSearch = useCallback(() => {
    const truthyFilters = omitBy(filters, (item) => !item);
    dispatch(searchProducts(truthyFilters));
    dispatch(setFilter(truthyFilters));
  }, [filters, dispatch]);

  const handleClear = () => {
    form.resetFields();
    setFilters(defaultFilters);
    dispatch(setFilter(defaultFilters));
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        initialValues={defaultFilters}
        onFinish={handleSearch}
      >
        <div className="flex items-center rounded p-2 mb-2 w-full border border-slate-500">
          <LuSearch />
          <input
            type="text"
            placeholder="Quick search"
            className="ml-2 focus:outline-none bg-transparent"
          />
        </div>
        <div className="slider-container mt-4 relative text-gray">
          <Slider
            range
            marks={marks}
            styles={sliderStyles}
            min={0}
            max={300}
            style={{ background: "#3A3841" }}
            defaultValue={selectedValue}
            onChange={handleSliderChange}
            tooltip={{
              formatter,
            }}
          />
        </div>
        <Flex vertical gap={16}>
          {filterConfigs.map((config) => (
            <Form.Item key={config.key} name={`field-${config.key}`}>
              <DropdownFilter
                items={config.items}
                name={config.name}
                onChange={(value: string) =>
                  handleFilterChange(config.key, value)
                }
              />
            </Form.Item>
          ))}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <button
              className="btn btn-ghost text-white filter-btn w-full sm:w-1/2 mb-2 sm:mb-0"
              onClick={handleClear}
            >
              <img src={close} className="w-auto" />
              Clear all
            </button>
            <button
              className="btn text-white bg-gradient-to-br from-pink-600 to-purple-600 w-full sm:w-1/2"
              type="submit"
            >
              Search
            </button>
          </div>
        </Flex>
      </Form>
    </>
  );
};

export default LeftContent;
