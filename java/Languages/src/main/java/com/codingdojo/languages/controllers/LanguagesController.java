package com.codingdojo.languages.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.languages.models.Language;
import com.codingdojo.languages.services.LanguageService;

@Controller
public class LanguagesController {
private final LanguageService languageService;
    
    public LanguagesController(LanguageService languageService) {
        this.languageService = languageService;
    }
    
    @RequestMapping("/languages")
    public String index(Model model) {
        List<Language> languages = languageService.allLanguages();
        model.addAttribute("languages", languages);
        return "index.jsp";
    }
    
    @RequestMapping("/languages/new")
    public String newLanguage(@ModelAttribute("language") Language language) {
        return "/languages/index.jsp";
    }
    @RequestMapping(value="/languages", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("language") Language language, BindingResult result) {
        if (result.hasErrors()) {
            return "/languages/index.jsp";
        } else {
            languageService.createLanguage(language);
            return "redirect:/languages";
        }
    }
//    @RequestMapping("/books/{id}")
//	public String show(@PathVariable("id") Long id, Model model) {
//	    Book book = bookService.findBook(id);
//	    model.addAttribute("book", book);
//	    return "/books/show.jsp";
//	}
//    @RequestMapping("/books/{id}/edit")
//    public String edit(@PathVariable("id") Long id, Model model) {
//        Book book = bookService.findBook(id);
//        model.addAttribute("book", book);
//        return "/books/edit.jsp";
//    }
//    
//    @RequestMapping(value="/books/{id}", method=RequestMethod.PUT)
//    public String update(@Valid @ModelAttribute("book") Book book, BindingResult result) {
//        if (result.hasErrors()) {
//            return "/books/edit.jsp";
//        } else {
//            bookService.updateBook(book.getId(), book.getTitle(), book.getDescription(), book.getLanguage(), book.getNumberOfPages());
//            return "redirect:/books";
//        }
//    }
//    
	@RequestMapping(value="/languages/{id}", method=RequestMethod.DELETE)
	public String destroy(@PathVariable("id") Long id) {
	languageService.deleteLanguage(id);
	return "redirect:/languages";
	}
}
