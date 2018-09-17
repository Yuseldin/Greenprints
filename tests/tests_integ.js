import { expect } from 'chai';
import { XMLHttpRequest } from 'xmlhttprequest';
import * as utils from '../src/utils';


describe("integration", function(){
    global.XMLHttpRequest = XMLHttpRequest;
    describe("utils", function(){
        let validUrl = 'http://www.google.com';
        let invalidUrl = 'http://www.vevwevw.c';
        describe("sendRequest", function(){

            it("Should resolve with response", function(){
                let args = {
                    method: 'GET',
                    url: validUrl
                };

                utils.sendRequest(args)
                .then(resp => {
                    expect(resp).to.not.be.undefined;
                    expect(typeof resp == 'string').to.be.true;
                })
            })

            it("Should reject if request is unsuccessful", function(){
                let args = {
                    method: 'GET',
                    url: invalidUrl
                };

                utils.sendRequest(args)
                .then(resp => {
                    expect(true).to.be.false;
                }, error => {
                    expect(true).to.be.true;
                })
            })
        })

        describe("Sendrequests", function(){

            it('Should resolve if requests succeeds', function(){
                let args = [
                    {
                        method: 'GET',
                        url: validUrl
                    },
                    {
                        method: 'GET',
                        url: validUrl
                    },
                    {
                        method: 'GET',
                        url: validUrl
                    }
                ]
                utils.sendRequests(args).then(resps => {
                    expect(resps.length).to.equal(args.length);
                }, error => {
                    expect(true).to.be.false;
                })
            })

            it('Should reject if request fails', function(){
                let args = [
                    {
                        method: 'GET',
                        url: invalidUrl
                    },
                    {
                        method: 'GET',
                        url: validUrl
                    },
                    {
                        method: 'GET',
                        url: validUrl
                    }
                ]
                utils.sendRequests(args).then(resps => {
                    expect(true).to.be.false;
                }, error => {
                    expect(true).to.be.true;
                })
            })

        })
    })
})