/*
 * <#
 * .SYNOPSIS
 * <Overview of script>
 * .DESCRIPTION
 * <Brief description of script>
 * .PARAMETER <Parameter_Name>
 * <Brief description of parameter input required. Repeat this attribute if required>
 * .INPUTS
 * <Inputs if any, otherwise state None>
 * .OUTPUTS
 * <Outputs if anything is generated>
 * .NOTES
 *    Version:        0.1
 *    Author:         Muhanned Noman
 *    Creation Date:  Tuesday, January 28th 2020, 6:03:22 am
 *    File: App.js
 *    Copyright (c) 2020 Muhanned Noman
 * HISTORY:
 * Date      	          By	Comments
 * ----------	          ---	----------------------------------------------------------
 * 
 * .COMPONENT
 *  Required Modules: 
 * 
 * .LICENSE
 * MIT License
 * 
 * Copyright (c) 2020 Your Company
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *  
 * 
 * #---------------------------------------------------------[Initialisations]--------------------------------------------------------
 * 
 * #---------------------------------------------------------[Variables]--------------------------------------------------------
 * 
 * #---------------------------------------------------------[Modules]--------------------------------------------------------
 * 
 * #---------------------------------------------------------[Functions]--------------------------------------------------------
 */

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', (first,second)=> {
     console.log( first + second);
});

eventEmitter.emit('myEvent',2,2);

class Person extends EventEmitter {
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let notMuhanned = new Person("Not Muhanned");

notMuhanned.on('name', ()=> {
    console.log("This is " + notMuhanned.name);
});

let muhanned = new Person('Muhanned');

muhanned.on('name', ()=> {
     console.log("I'm " + muhanned.name);
});

muhanned.emit('name');
notMuhanned.emit('name');
