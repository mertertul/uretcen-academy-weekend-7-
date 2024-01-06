import React, { useState, useEffect } from "react";
import NotItem from "./baskabolum";
import { v4 as uuidv4 } from 'uuid';

export default function NoteForm() {
    const def_value = { baslik: "", yazi: "", pinned: false };
    const [data, setData] = useState(def_value);
    const [values, setValues] = useState([]);

    const [pinned, setPinned] = useState(false);
    const [pinnedItem, setPinnedItem] = useState(values);
    const [isShowing, setShow] = useState(true);

    function showChanged() {
        setShow(prev => !prev);
    }

    function pinChanged() {
        setPinned(prev => !prev);
    }

    useEffect(() => {
        setPinnedItem(values);
    }, [values]);

    useEffect(() => {
        pinned ? setPinnedItem(values.filter(item => item.pinned === pinned)) : setPinnedItem(values);
    }, [pinned]);

    function isNullOrEmpty(val) {
        return (val === undefined && val === null);
    }

    function remove(id) {
        setValues(prev => prev.filter(item => item.uuid !== id));
    }

    function edit(id) {
        setData({ ...values.find(item => item.uuid === id), isEdit: true });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (data.isEdit) {
            const itemIndex = values.findIndex(item => item.uuid === data.uuid);
            const newItem = values.slice();
            newItem[itemIndex] = { ...data };
            setValues(newItem);
        } else if (data.baslik.length > 0 && data.yazi.length > 0) {
            data.uuid = uuidv4();
            if (!isNullOrEmpty(data.baslik) && !isNullOrEmpty(data.yazi)) {
                setValues(prev => [data, ...prev]);
            }
        }
        setData(def_value);
        event.target.reset();
    }

    function handleChange(event) {
        setData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
            };
        });
    }

    return (
        <>
            <div className="container bg-white w-50 border border-light shadow-sm m-auto p-3">
                <h4 className="w-100 text-center text-dark m-auto">React Not Uygulaması</h4>
                <form onSubmit={handleSubmit}>
                    {}
                </form>
                <div className="container bg-white w-100 border border-light m-auto mt-5 p-3 px-0">
                    <div className="row w-100 align-items-center mx-auto mt-3">
                        {}
                    </div>
                    {isShowing && (
                        <div className="row w-100 align-items-center mx-auto mt-3">
                            <NotItem data={pinnedItem} remove_item={remove} edit_item={edit} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
