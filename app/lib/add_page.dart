import 'package:flutter/material.dart';
import 'package:notebook/pages.dart';

class AddPage extends StatelessWidget {
  AddPage({Key? key}) : super(key: key);

  final TextEditingController content = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const Text(
                "Add Page dfd",
                style: TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.w800,
                  color: Colors.red,
                ),
              ),
              Padding(
                padding: EdgeInsets.all(16.0),
                child: TextFormField(
                  // Allow multiline input
                  controller: content,
                  decoration: const InputDecoration(
                    hintText: "Enter the context",
                    border: OutlineInputBorder(),
                  ),
                ),
              ),
              ElevatedButton(
                  onPressed: () {
                    String text = content.text;
                    if (text.isNotEmpty) {
                      Navigator.pop(
                          context,
                          MaterialPageRoute(
                              builder: (content) => const Pages()));
                    } else {
                      showDialog(
                          context: context,
                          builder: (context) => const AlertDialog(
                                title: Text("Error"),
                                content: Text("Enter Text"),
                              ));
                    }
                  },
                  child: const Text("Add Page")),
              Positioned(
                bottom: 16.0,
                right: 16.0,
                child: FloatingActionButton.small(
                  onPressed: () {
                    Navigator.pop(context);
                  },
                  child: const Icon(Icons.arrow_back),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
