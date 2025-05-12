import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FeatureRadioProps } from "@/types/ProductsType";

const FeatureRadio = ({
  selectedCategory,
  onCategoryChange,
}: FeatureRadioProps) => {
  return (
    <div>
      <RadioGroup
        className="mt-2 flex justify-center"
        value={selectedCategory}
        onValueChange={onCategoryChange}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="" id="all" />
          <Label htmlFor="all">ALL</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="electronics" id="electronics" />
          <Label htmlFor="electronics">Electronics</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="jewelery" id="jewelery" />
          <Label htmlFor="jewelery">Jewelery</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="men's clothing" id="mens" />
          <Label htmlFor="mens">Men</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="women's clothing" id="womens" />
          <Label htmlFor="womens">Women</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
export default FeatureRadio;
