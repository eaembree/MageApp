
import React, { Component } from 'react';
import { Single } from '../components/Single';
import { Multi } from '../components/Multi';

export function Chooser({ rollType }) {
    let output;
    if (rollType === 'single') {
        output = <Single />;
    }
    else {
        output = <Multi />;
    }

    return output
}