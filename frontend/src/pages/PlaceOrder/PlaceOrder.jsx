
import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../components/context/StoreContext";
import Location from "./Location"; // Import the Location component

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    const [showLocationPopup, setShowLocationPopup] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLocationSelect = (locationData) => {
        setFormData(prev => ({
            ...prev,
            street: locationData.street,
            city: locationData.city,
            state: locationData.state,
            zipCode: locationData.zipCode,
            country: locationData.country
        }));
        setShowLocationPopup(false);
    };

    const handleCloseLocationPopup = () => {
        setShowLocationPopup(false);
    };

    return (
        <>
            <form className="place-order flex flex-col sm:flex-row">
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <input 
                            name="firstName"
                            placeholder="First Name" 
                            type="text" 
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        <input 
                            name="lastName"
                            placeholder="Last Name" 
                            type="text" 
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <input 
                        name="email"
                        placeholder="Email Address" 
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input 
                        name="street"
                        placeholder="Street" 
                        type="text" 
                        value={formData.street}
                        onChange={handleInputChange}
                    />
                    <div className="multi-fields">
                        <input 
                            name="city"
                            placeholder="City" 
                            type="text" 
                            value={formData.city}
                            onChange={handleInputChange}
                        />
                        <input 
                            name="state"
                            placeholder="State" 
                            type="text" 
                            value={formData.state}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="multi-fields">
                        <input 
                            name="zipCode"
                            placeholder="Zip Code" 
                            type="text" 
                            value={formData.zipCode}
                            onChange={handleInputChange}
                        />
                        <input 
                            name="country"
                            placeholder="Country" 
                            type="text" 
                            value={formData.country}
                            onChange={handleInputChange}
                        />
                    </div>
                    <input 
                        name="phone"
                        type="text" 
                        placeholder="Phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    <button 
                        type="button" 
                        className="select-location-btn"
                        onClick={() => setShowLocationPopup(true)}
                    >
                         Select Current Location
                    </button>
                </div>
                <div className="place-order-right">
                    <div className="cart-total">
                        <h2>Cart Totals</h2>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>
                                <p>Total</p>
                            </b>
                            <b>
                                <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
                            </b>
                        </div>
                        <button type="submit">
                            PROCEED TO PAYMENT
                        </button>
                    </div>
                </div>
            </form>


            {/* Location Popup */}
            {showLocationPopup && (
                <Location 
                    onLocationSelect={handleLocationSelect}
                    onClose={handleCloseLocationPopup}
                />
            )}
        </>
    );
};

export default PlaceOrder;