import React from "react"
import './imageUpload.css';
//import {Row, InputGroup, FormControl, Button, Card, Container, Col, Image} from "react-bootstrap"

/*
class ImageUpload extends React.Component {
    render(){
        return(
            <Container>
            <Row>
            <Card className="text-left" style={{ width: '100rem' }}>
                <Card.Header>이미지 업로드</Card.Header>
                <Card.Body>
                    <Card.Title>이미지 업로드 예제 만들기</Card.Title>
                    <Image src="https://avatarfiles.alphacoders.com/709/thumb-70914.png" />
                </Card.Body>
            </Card>
            </Row>
            </Container>
        )
    }
}
*/

class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      )
    }
  }

export default ImageUpload;


