import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
import { usePathname } from "next/navigation";

const FeatureRadio = ({
  selectedCategory,
  onCategoryChange,
}: FeatureRadioProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="flex items-center pr-3">
      {!isHomePage && (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="cursor-pointer" variant="outline">
                {selectedCategory
                  ? selectedCategory.charAt(0).toUpperCase() +
                    selectedCategory.slice(1).replace(/-/g, " ")
                  : "Select Category"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-72">
              <DropdownMenuRadioGroup
                value={selectedCategory}
                onValueChange={onCategoryChange}
              >
                <DropdownMenuRadioItem value="">ALL</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="beauty">
                  Beauty
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="fragrances">
                  Fragrances
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="furniture">
                  Furniture
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="groceries">
                  Groceries
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="home-decoration">
                  Home Decoration
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="kitchen-accessories">
                  Kitchen Accessories
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="laptops">
                  Laptops
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="mens-shirts">
                  Men&apos;s Shirts
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="mens-shoes">
                  Men&apos;s Shoes
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="mens-watches">
                  Men&apos;s Watches
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="mobile-accessories">
                  Mobile Accessories
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="motorcycle">
                  Motorcycle
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="skin-care">
                  Skin Care
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="smartphones">
                  Smartphones
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="sports-accessories">
                  Sports Accessories
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="sunglasses">
                  Sunglasses
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="tablets">
                  Tablets
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="tops">Tops</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="vehicle">
                  Vehicle
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="womens-bags">
                  Women&apos;s Bags
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="womens-dresses">
                  Women&apos;s Dresses
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="womens-jewellery">
                  Women&apos;s Jewellery
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="womens-shoes">
                  Women&apos;s Shoes
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="womens-watches">
                  Women&apos;s Watches
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      <div>
        {isHomePage && (
          <RadioGroup
            defaultValue={selectedCategory}
            onValueChange={onCategoryChange}
            className="flex items-center gap-2"
          >
            <div className=" flex items-center space-x-2">
              <RadioGroupItem
                className="cursor-pointer"
                value=""
                id="radio-all"
              />
              <Label className="cursor-pointer" htmlFor="radio-all">
                All
              </Label>
            </div>
            <div className=" flex items-center space-x-2">
              <RadioGroupItem
                id="radio-smartphones"
                className="cursor-pointer"
                value="smartphones"
              />
              <Label className="cursor-pointer" htmlFor="radio-smartphones">
                Smartphones
              </Label>
            </div>
            <div className=" flex items-center space-x-2">
              <div className=" flex items-center space-x-2">
                <RadioGroupItem
                  id="radio-mobile-accessories"
                  className="cursor-pointer"
                  value="mobile-accessories"
                />
                <Label
                  className="cursor-pointer"
                  htmlFor="radio-mobile-accessories"
                >
                  Mobile Accessories
                </Label>
              </div>
              <RadioGroupItem
                id="radio-motorcycle"
                className="cursor-pointer"
                value="motorcycle"
              />
              <Label className="cursor-pointer" htmlFor="radio-motorcycle">
                Motorcycle
              </Label>
            </div>
            <div className=" flex items-center space-x-2">
              <RadioGroupItem
                id="radio-home-decoration"
                className="cursor-pointer"
                value="home-decoration"
              />
              <Label className="cursor-pointer" htmlFor="radio-home-decoration">
                Home Decoration
              </Label>
            </div>
          </RadioGroup>
        )}
      </div>
    </div>
  );
};
export default FeatureRadio;
