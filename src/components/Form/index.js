import React, { useState } from 'react';

import './form.css';

export function From() {
    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailError, setEmailError] = useState('Емейл не может быть пустым');
    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [phoneError, setPhoneError] = useState('Номер не может быть пустым');

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный емейл')
            if (!e.target.value) {
                setEmailError('Емейл не может быть пустым')
            }
        } else {
            setEmailError('')
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 12) {
            setNameError('От 3 до 8 символов')
            if (!e.target.value) {
                setNameError('Имя не может быть пустым')
            }
        } else {
            setNameError('')
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        const phoneRe = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
        const value = e.target.value;
        const digits = value.replace(/\D/g, "");
        if (!phoneRe.test(digits)) {
            setPhoneError('Некорректный номер')
            if (!e.target.value) {
                setPhoneError('Номер не может быть пустым')
            }
        } else {
            setPhoneError('')
        }

    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
            case 'phone':
                setPhoneDirty(true)
                break
            default :
                return undefined

        }
    }

    return (
        <div className="form-main">
            <button className="btn-showForm btn btn-warning" onClick={() => {setShowForm(!showForm)}}>{!showForm ? 'Show Form Button' : 'Close Form Button'}</button>
            {
                showForm &&
                <div className="form-container">
                    <h1 className="form-header">Напишите нам</h1>
                    <form className="from-connection">
                        <p className="input-header">Ваше имя<br/>
                            <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} className="input-name form-control" name="name" type="text" size="40"/>
                            {(nameDirty && nameError) && <div style={{color: 'red', fontSize: '12px', paddingLeft: '20px'}}>{nameError}</div>}
                        </p>
                        <p className="input-header">Ваш телефон<br/>
                            <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} className="input-phone form-control" name="phone" type="text" size="40"/>
                            {(phoneDirty && phoneError) && <div style={{color: 'red', fontSize: '12px', paddingLeft: '20px'}}>{phoneError}</div>}
                        </p>
                        <p className="input-header">Email<br/>
                            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="input-email form-control" name="email" type="text" size="40"/>
                            {(emailDirty && emailError) && <div style={{color: 'red', fontSize: '12px', paddingLeft: '120px'}}>{emailError}</div>}
                        </p>
                        <p className="input-header">Сообщение<br/>
                            <input className="input-message form-control" name="message" cols="40" rows="3"/>
                        </p>

                    </form>
                </div>
            }
       </div>
    )
}