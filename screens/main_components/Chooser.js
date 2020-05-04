
import React, { Component } from 'react';
import { Single } from './Single';
import { Multi } from './Multi';

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