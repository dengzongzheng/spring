package com.dzz.spring_web.controller;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Response;

import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import static javafx.scene.input.KeyCode.T;

/**
 * Created by dzz on 16/5/1.
 */
@Controller
@RequestMapping(value="/file")
public class FileUploadController {

    @RequestMapping(value="",method = RequestMethod.GET)
    public String upload(){

        return "upload";
    }

    @RequestMapping(value="upload",method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity fileUpload(@RequestParam MultipartFile[] files, HttpServletRequest request){

        System.out.println("_________________________upload");
        String fileName = "";
        for (MultipartFile file:files){
            fileName = file.getOriginalFilename();
            System.out.println(file.getOriginalFilename()+"________"+file.getName()+"____"+file.getContentType()+"_____"+file.getSize());
        }

        return ResponseEntity.ok(fileName);
    }
}
