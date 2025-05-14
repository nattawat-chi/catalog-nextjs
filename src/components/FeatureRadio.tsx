// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FeatureRadioProps } from "@/types/ProductsType";
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const FeatureRadio = ({
  selectedCategory,
  onCategoryChange,
}: FeatureRadioProps) => {
  return (
    <div>
      {/* <RadioGroup
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
      </RadioGroup> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={selectedCategory}
            onValueChange={onCategoryChange}
          >
            <DropdownMenuRadioItem value="">ALL</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="beauty">Beauty</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="furniture">
              Furniture
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="laptops">
              Laptops
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="mens-shirts">
              Mens Shirts
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="mens-shoes">
              Mens Shoes
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="skin-care">
              Skin Care
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="smartphones">
              Smartphones
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="vehicle">
              Vehicle
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="womens-dresses">
              Womens Dresses
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="womens-shoes">
              Womens Shoes
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default FeatureRadio;
