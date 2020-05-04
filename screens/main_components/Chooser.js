
import React, { Component } from 'react';
import { Single } from './Single';
import { Extended } from './Extended';

export function Chooser({ rollType }) {
    let output;
    if (rollType === 'single') {
        output = <Single />;
    }
    else {
        output = <Extended />;
    }

    return output
}