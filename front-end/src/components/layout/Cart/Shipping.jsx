import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingInfo } from '../../../actions/cartAction';
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { Country, State } from 'country-state-city';
import { useAlert } from 'react-alert';
import styled from 'styled-components';
import CheckoutSteps from './CheckoutSteps';
import { useNavigate } from 'react-router-dom';
const ShippingContainerStyled = styled.div`
    width: 100vw;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const ShippingWrapStyled = styled.div`
    background-color: #fff;
    width: 25vw;
    box-sizing: border-box;
    overflow: hidden;
`
const ShippingHeadingStyled = styled.h2`
    text-align: center;
    color: rgb(0, 0, 0, 0.664);
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    margin: auto; 
`
const ShippingInfoStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 10px;
    justify-content: space-evenly;
    height: 80%;
    transition: all 0.5s;
`
const ShippingAddressWrapStyled = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`
const InputStyled = styled.input`
    padding: 10px;
    padding-right: 2px;
    margin: 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 4px;
    outline: none;
`
const SelectStyled = styled.select`
    padding: 10px;
    padding-right: 2px;
    margin: 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 4px;
    outline: none;
`
const OptionStyled = styled.option``
const SubmitBtnStyled = styled.input`
    border: none;
    background-color: #fcb800;
    color: #000;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    transition: all 0.5s;
    outline: none;
    margin: 10px;
    border-radius: 2px;
    &:hover{
        background-color: #222;
        color: #fff;
    }
`
const Shipping = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const { shippingInfo } = useSelector((state) => state.cart);

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [state, setState] = useState(shippingInfo.state);
    const [country, setCountry] = useState(shippingInfo.country);
    const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    const shippingSubmit = (e) =>{
        e.preventDefault();
        if(phoneNo.length > 10 || phoneNo.length < 10){
            alert.error("Số điện thoại phải có 10 kí tự");
            return;
        }
        dispatch(saveShippingInfo({address, city, state, country, pinCode, phoneNo}));
        navigate('/order/confirm')
    }
  return (
    <>
        <CheckoutSteps activeStep={0} />
        <ShippingContainerStyled>
            <ShippingWrapStyled>
                <ShippingHeadingStyled>Chi tiết vận chuyển</ShippingHeadingStyled>
            </ShippingWrapStyled>
            <ShippingInfoStyled 
                encType='multipart/form-data'
                onSubmit={shippingSubmit}
                >
                <ShippingAddressWrapStyled>
                    <HomeIcon 
                        style={{color: 'rgba(0, 0, 0, 0.623)'}}
                    />
                    <InputStyled 
                        type="text"
                        placeholder="Địa chỉ"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </ShippingAddressWrapStyled>
                <ShippingAddressWrapStyled>
                    <LocationCityIcon 
                        style={{color: 'rgba(0, 0, 0, 0.623)'}}
                    />
                    <InputStyled 
                        type="text"
                        placeholder="Quận, huyện"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </ShippingAddressWrapStyled>
                <ShippingAddressWrapStyled>
                    <PinDropIcon 
                        style={{color: 'rgba(0, 0, 0, 0.623)'}}
                    />
                    <InputStyled 
                        type="number"
                        placeholder="Mã pin"
                        required
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                    />
                </ShippingAddressWrapStyled>
                <ShippingAddressWrapStyled>
                    <PhoneIcon 
                        style={{color: 'rgba(0, 0, 0, 0.623)'}}
                    />
                    <InputStyled 
                        type="number"
                        placeholder="Số điện thoại"
                        required
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        size="10"
                    />
                </ShippingAddressWrapStyled>
                <ShippingAddressWrapStyled>
                    <PublicIcon 
                        style={{color: 'rgba(0, 0, 0, 0.623)'}}
                    />
                    <SelectStyled 
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <OptionStyled value="">Quốc gia</OptionStyled>
                        {Country && 
                            Country.getAllCountries().map((item) => (
                                <OptionStyled key={item.isoCode} value={item.isoCode}>
                                    {item.name}
                                </OptionStyled>
                            ))
                        }
                    </SelectStyled>
                </ShippingAddressWrapStyled>
                {country && (
                    <ShippingAddressWrapStyled>
                            <TransferWithinAStationIcon 
                                style={{color: 'rgba(0, 0, 0, 0.623)'}}
                            />
                            <SelectStyled 
                                required
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                <OptionStyled value="">Thành phố</OptionStyled>
                                {State && 
                                    State.getStatesOfCountry(country).map((item) => (
                                        <OptionStyled key={item.isoCode} value={item.isoCode}>
                                            {item.name}
                                        </OptionStyled>
                                    ))
                                }
                            </SelectStyled>
                    </ShippingAddressWrapStyled>
                )}
                <SubmitBtnStyled 
                    type="submit"
                    value="Xác nhận"
                    disabled={state ? false : true}
                />
            </ShippingInfoStyled>
        </ShippingContainerStyled>
    </>
  )
}

export default Shipping