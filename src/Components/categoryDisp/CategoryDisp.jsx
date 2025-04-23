import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { List } from 'lucide-react'

const CategoryDisp = ({ onSelectChange, categoryName }) => {
    const [sortedCategory, setSortedCategory] = useState({})
    const [selectedItems, setSelectedItems] = useState([])

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is beyond a certain point (e.g., 200px)
            if (window.scrollY > 320) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        // Add the event listener for scroll
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.post('https://electrobackend-dbup.onrender.com/user/sortPrdByName');
                const data = res.data.sortedCategory;
                setSortedCategory(data);

                // Auto-check everything and pre-fill selectedItems
                const preSelected = [];

                Object.entries(data).forEach(([categoryKey, types]) => {
                    const allItems = types.flatMap(type => {
                        return type.items.map(p => ({ ...p, typeName: type.name }));
                    });

                    if (allItems.length > 0) {
                        preSelected.push({
                            category: categoryKey,
                            items: allItems
                        });
                    }
                });

                setSelectedItems(preSelected);
                onSelectChange(preSelected);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();
    }, []);


    const getTitle = (key) => {
        switch (key) {
            case 'appliances': return 'Home Appliances'
            case 'gadget': return 'Laptops & Phones'
            case 'accessories': return 'Accessories'
            case 'building': return 'Building Equipment'
            case 'others': return 'Others'
            default: return key
        }
    }

    const handleCheckboxChange = (item) => {
        const updated = [...selectedItems];
        const categoryIndex = updated.findIndex(i => i.category === item.category);
        const itemName = item.type.name;
        const itemProducts = item.type.items;

        if (categoryIndex > -1) {
            const category = updated[categoryIndex];

            // Check if type items already exist
            const hasTypeItems = category.items.some(p => p.typeName === itemName);

            if (hasTypeItems) {
                // Remove this type's items
                category.items = category.items.filter(p => p.typeName !== itemName);

                // If no items left under the category, remove the category
                if (category.items.length === 0) {
                    updated.splice(categoryIndex, 1);
                } else {
                    updated[categoryIndex] = { ...category };
                }
            } else {
                // Add new type's items
                const newItems = itemProducts.map(p => ({ ...p, typeName: itemName }));
                category.items.push(...newItems);
                updated[categoryIndex] = { ...category };
            }
        } else {
            if(categoryName){
                if(categoryName==item.category){
                    const newItems = item.type.items.map(p => ({ ...p, typeName: item.type.name }));
                    updated.push({
                        category: item.category,
                        items: newItems
                    });   
                }
            }else{

                // No such category exists yet — create new
                const newItems = item.type.items.map(p => ({ ...p, typeName: item.type.name }));
                updated.push({
                    category: item.category,
                    items: newItems
                });
            }
        }

        setSelectedItems(updated);
        onSelectChange(updated);
    };



    return (
        <div>
            <div className="border h-100 rounded p-3 pt-3 d-none d-md-block" style={{ position: isFixed ? "fixed" : "", top: isFixed ? '2%' : '', width: isFixed ? '335px' : '', zIndex: '1' }}>
                <h6 className='px-2 border-bottom' style={{ height: "40px", color: "#5CAF90" }}>Category</h6>
                <div className="mt-3">
                    {Object.entries(sortedCategory).map(([catKey, items]) => (
                        <div key={catKey}>
                            <h6 className='mt-1 text-secondary' style={{ fontSize: "15px" }}>{getTitle(catKey)}</h6>
                            <div style={{ lineHeight: "3.5" }}>
                                {items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="d-flex justify-content-between fw-semibold"
                                        style={{ color: "#999999", fontSize: "12px" }}
                                    >
                                        <div className='d-flex gap-2'>
                                            <input
                                                type="checkbox"
                                                onChange={() => handleCheckboxChange({ type: item, category: catKey })}
                                                checked={
                                                    selectedItems.some(cat =>
                                                        cat.category === catKey &&
                                                        cat.items.some(p => p.typeName === item.name)
                                                    )
                                                }
                                                style={{ border: "1px solid whitesmoke" }}
                                            />
                                            <span>{item.name}</span>
                                        </div>
                                        <span className='px-4'>({item.count})</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button class="btn btn-primary d-md-none d-flex gap-2 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{marginBottom:"10px",  backgroundColor: "#0DC029"}}><List/> Category</button>

            <div class="offcanvas offcanvas-start w-75" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    {/* <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5> */}
                    <h6 className='px-2 border-bottom w-100' id="offcanvasWithBothOptionsLabel" style={{ height: "40px", color: "#5CAF90" }}>Category</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                <div className="">
                    {Object.entries(sortedCategory).map(([catKey, items]) => (
                        <div key={catKey}>
                            <h6 className='text-secondary' style={{ fontSize: "15px" }}>{getTitle(catKey)}</h6>
                            <div style={{ lineHeight: "3.5" }}>
                                {items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="d-flex justify-content-between fw-semibold"
                                        style={{ color: "#999999", fontSize: "12px" }}
                                    >
                                        <div className='d-flex gap-2'>
                                            <input
                                                type="checkbox"
                                                onChange={() => handleCheckboxChange({ type: item, category: catKey })}
                                                checked={
                                                    selectedItems.some(cat =>
                                                        cat.category === catKey &&
                                                        cat.items.some(p => p.typeName === item.name)
                                                    )
                                                }
                                                style={{ border: "1px solid whitesmoke" }}
                                                data-bs-dismiss="offcanvas" aria-label="Close"
                                            />
                                            <span>{item.name}</span>
                                        </div>
                                        <span className='px-4'>({item.count})</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryDisp
