package in.edac.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value =HttpStatus.NOT_FOUND)
public class RecordingNoFoundException extends RuntimeException{

	public static final long serialVersionUID=1L;
	public RecordingNoFoundException(String message){
		super(message);
	}
}
