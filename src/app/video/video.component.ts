import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as RecordRTC from 'recordrtc';
declare var UIkit;

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {

    @ViewChild('video', { static: false }) video: any
    private stream: MediaStream;
    private recordRTC: any;
    status: boolean = false;

    constructor(private router: Router) { };

    ngOnInit() { }

    ngAfterViewInit() {
        // set the initial state of the video
        let video: HTMLVideoElement = this.video.nativeElement;
        video.muted = false;
        video.controls = true;
        video.autoplay = false;
    }

    toggleControls() {
        let video: HTMLVideoElement = this.video.nativeElement;
        video.muted = !video.muted;
        video.controls = !video.controls;
        video.autoplay = !video.autoplay;
    }

    successCallback(stream: MediaStream) {

        var options = {
            mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 128000,
            bitsPerSecond: 128000 // if this line is provided, skip above two
        };
        this.stream = stream;
        this.recordRTC = RecordRTC(stream, options);
        this.recordRTC.startRecording();
        let video: HTMLVideoElement = this.video.nativeElement;
        video.srcObject = stream
        this.toggleControls();
    }

    errorCallback() {
        //handle error here
    }

    processVideo(audioVideoWebMURL) {
        let video: HTMLVideoElement = this.video.nativeElement;
        let recordRTC = this.recordRTC;
        video.src = audioVideoWebMURL;
        this.toggleControls();
        var recordedBlob = recordRTC.getBlob();
        recordRTC.getDataURL(function (dataURL) { });
    }

    startRecording() {
        this.status = true
        let mediaConstraints = {
            video: {
                width: {
                    min: 1280
                },
                height: {
                    min: 720
                }
            }, audio: true
        };
        navigator.mediaDevices
            .getUserMedia(mediaConstraints)
            .then(this.successCallback.bind(this), this.errorCallback.bind(this));


    }

    stopRecording() {
        let recordRTC = this.recordRTC;
        recordRTC.stopRecording(this.processVideo.bind(this));
        let stream = this.stream;
        stream.getAudioTracks().forEach(track => track.stop());
        stream.getVideoTracks().forEach(track => track.stop());
        UIkit.modal(document.getElementById('modal-full')).show()

        let t =  setTimeout( () => {
            UIkit.modal(document.getElementById('modal-full')).hide()
            this.router.navigate(['./dashboard'])
        }, 10000)
    }

    download() {
        this.recordRTC.save('video.webm');
    }
}